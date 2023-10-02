import React from 'react';
import "../Styles/NowTab.css"

function NowTab() {
  const activities = [
    {
      description: "Launched this really cool website.",
      date: "Oct 2, 2023",
      image: process.env.PUBLIC_URL + "/website.png",
      link: "https://www.anupamarya.com"
    },
    {
      description: "Bought a ₹250000000 lottery ticket.",
      date: "Sep 10, 2023",
      image: process.env.PUBLIC_URL + "/lottery.png",
      link: "https://www.youtube.com/watch?v=KYQ6Gu-zhrg"
    },
    {
      description: "Watched Oppenheimer in the biggest cinema screen in India.",
      date: "Jul 27, 2023",
      image: process.env.PUBLIC_URL + "/oppenheimer.png",
      link: "https://www.youtube.com/watch?v=u2nPkwlUI6Y"
    },
  ];

  return (
    <div className="now-container">
      <h1>{"Events [Live]"}</h1>
      <div className="now-table-container">
      <table className="activity-table">
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index} className="activity-row">
              <td className="activity-desc">
                <a href={activity.link} target="_blank" rel="noopener noreferrer">
                  {activity.description}
                </a>
              </td>
              <td className="activity-date">{activity.date}</td>
              <td className="activity-img-cell">
                <a href={activity.link} target="_blank" rel="noopener noreferrer">
                  <img src={activity.image} alt={activity.description} className="activity-img" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}


export default NowTab;
