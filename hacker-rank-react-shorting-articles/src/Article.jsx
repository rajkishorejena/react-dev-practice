/* eslint-disable react/prop-types */
const Article = ({ articles }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Upvotes</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {articles &&
          articles.map((item, index) => {
            return (
              <tr key={index}>
                <th>{item.title}</th>
                <th>{item.upvotes}</th>
                <th>{item.date}</th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Article;
