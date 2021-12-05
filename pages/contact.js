import Head from 'next/head';
import React, {useContext, useEffect, useState} from 'react';

import {checkIfEmpty, validateEmail} from '../common/functions';
import {CustomInput, CustomTextArea} from '../common/inputs';

import Layout from '../components/Layout';
import Map from '../components/Map';

import styles from '../styles/Contact.module.css';
import {apiUrl} from '../common/config';

import ReCaptchaV3Google from '../components/ReCaptchaV3';

export default function Contact({data}) {
  const [values, setValues] = useState({
    email: '',
    name: '',
    subject: '',
    message: '',
  });

  const content = data ? data.content : {};

  const [errors, setErrors] = useState({
    email: false,
    name: false,
    subject: false,
    message: false,
  });

  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);

  const changeValue = (e, name) => {
    setValues({...values, [name]: e.target.value});
    setErrors({...errors, [name]: false});
  };

  const submit = (e) => {
    let check = 0;

    if (checkIfEmpty(values.name)) {
      setErrors((prev) => ({...prev, name: true}));
      check++;
    }
    if (checkIfEmpty(values.email)) {
      setErrors((prev) => ({...prev, email: true}));
      check++;
    }
    if (!validateEmail(values.email)) {
      setErrors((prev) => ({...prev, email: true}));
      check++;
    }
    if (checkIfEmpty(values.message)) {
      setErrors((prev) => ({...prev, message: true}));
      check++;
    }

    if (check > 0) {
      setWarning('Invalid form.');
      return;
    }

    setWarning('');
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      refresh();
    }, [4000]);
  };

  const refresh = () => {
    setValues({
      email: '',
      name: '',
      subject: '',
      message: '',
    });
    setErrors({
      email: false,
      name: false,
      subject: false,
      message: false,
    });
  };

  return (
    <Layout>
      <Head>
        <title>{data.title || ''}</title>
        <meta property="og:title" content={data.title || ''} key="title" />
        <meta name="description" content={data.description || ''} />
      </Head>
      <div id={styles.header}>
        <div className="container p-0 ml-0  ">
          <h2>{data.header || ''}</h2>
        </div>
      </div>
      <div id={styles.map}>
        <Map />
      </div>
      <div className="container p-0 ml-0">
        <div
          id={styles.contact}
          className=" mt-5 mb-5 row justify-content-between"
        >
          <div id={styles.form} className="col-md-6">
            {!success ? (
              <>
                <h3>{content.contact || ''}</h3>
                <p>{content.paragraph || ''}</p>
                <div>
                  <CustomInput
                    className={styles.field_input}
                    placeholder="Name"
                    value={values.name}
                    name="name"
                    required={errors.name}
                    onChange={changeValue}
                  />

                  <CustomInput
                    className={styles.field_input}
                    placeholder="Email address"
                    value={values.email}
                    name="email"
                    required={errors.email}
                    onChange={changeValue}
                  />

                  <CustomInput
                    className={styles.field_input}
                    placeholder="Subject"
                    value={values.subject}
                    name="subject"
                    onChange={changeValue}
                  />

                  <CustomTextArea
                    className={styles.field_textarea}
                    value={values.message}
                    name="message"
                    onChange={changeValue}
                    required={errors.message}
                  />
                  <p
                    className={`form-text text-danger ${
                      !warning && ' invisible '
                    }`}
                  >
                    {warning || ''}
                  </p>

                  <ReCaptchaV3Google />

                  <button id={styles.custom_button} onClick={(e) => submit(e)}>
                    SEND MESSAGE
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.msg_success}>
                <h3>Message sent successfully</h3>
              </div>
            )}
          </div>
          <div id={styles.information} className="col-md-5  ">
            <div>
              <h3>{content.info || ''}</h3>
              <p>{content.paragraph2 || ''}</p>
              <div>
                <span>
                  <strong>email: </strong>
                  <a href={`mailto: ${content.email || ''}`} id={styles.email}>
                    {content.email || ''}
                  </a>
                </span>
                <br></br>
                <span>
                  <strong>phone: </strong>{' '}
                  <a href={`tel:${content.phone || ''}`}>
                    {content.phone || ''}
                  </a>
                </span>
              </div>
              <br></br>
              <div>
                <span>{content.address || ''}</span>
                <br></br>
                <span>{content.address2 || ''}</span>
              </div>
            </div>
            <div className="row mt-4">
              <h3>{content.store_hours}</h3>
              <div className="col-7 col-sm-7 mt-2">
                {content.days &&
                  content.days.map((elem) => {
                    return (
                      <React.Fragment key={elem}>
                        {elem} <br></br>
                      </React.Fragment>
                    );
                  })}
              </div>
              <div className="col-5 col-sm-5 mt-2">
                {content.hours &&
                  content.hours.map((elem) => {
                    return (
                      <React.Fragment key={elem}>
                        {elem} <br></br>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const url = `${apiUrl()}/pages?title=Contact`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {data}, // will be passed to the page component as props
  };
}
