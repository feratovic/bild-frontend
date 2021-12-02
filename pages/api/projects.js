import db from '../../data/db.json';

export default function handler(req, res) {
  const {start, limit, category} = req.query;
  let s = parseInt(start) || 0;
  let e = parseInt(limit) + s || 9;

  let filter = db.projects;
  let count = db.projects.length;

  if (category) {
    filter = filter.filter((element) => element.category === category);
    count = filter.length;
  }

  filter = filter.slice(s, e);

  res.status(200).json({posts: filter, count});
}
