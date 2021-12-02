import db from '../../data/db.json';

export default function handler(req, res) {
  const {title} = req.query;
  const filter = db.pages.filter((element) => element.title === title);

  res.status(200).json(filter[0] || {});
}
