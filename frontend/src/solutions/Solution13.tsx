import { useState } from "react";

const dataArray = [
  { id: 1, name: "John Tar", JobTitle: "Mechanic" },
  { id: 2, name: "Alice Johnson", JobTitle: "Software Engineer" },
  { id: 3, name: "Sam Bridge", JobTitle: "Teacher" },
  { id: 4, name: "Lila Stone", JobTitle: "Graphic Designer" },
  { id: 5, name: "Raj Patel", JobTitle: "Accountant" },
  { id: 6, name: "Chris Lee", JobTitle: "Chef" },
  { id: 7, name: "Mia Wong", JobTitle: "Architect" },
  { id: 8, name: "Tom Hanks", JobTitle: "Actor" },
  { id: 9, name: "Sofia Cruz", JobTitle: "Nurse" },
  { id: 10, name: "Bruce Wayne", JobTitle: "Entrepreneur" },
  { id: 11, name: "Clark Kent", JobTitle: "Journalist" },
  { id: 12, name: "Diana Prince", JobTitle: "Diplomat" },
  { id: 13, name: "Barry Allen", JobTitle: "Forensic Scientist" },
  { id: 14, name: "Hal Jordan", JobTitle: "Pilot" },
  { id: 15, name: "Arthur Curry", JobTitle: "Marine Biologist" },
  { id: 16, name: "Victor Stone", JobTitle: "Engineer" },
  { id: 17, name: "Oliver Queen", JobTitle: "Businessman" },
  { id: 18, name: "Billy Batson", JobTitle: "Student" },
  { id: 19, name: "Selina Kyle", JobTitle: "Security Specialist" },
  { id: 20, name: "Pamela Isley", JobTitle: "Botanist" },
];

const buttonStyle = {
  border: "1px solid black",
  borderRadius: "5px",
  padding: "5px",
  cursor: "pointer",
};

const Solution13 = () => {
  const [start, setStart] = useState(0);
  const SIZE = 3;
  const max = dataArray.length;

  const pageList = dataArray.slice(start, start + SIZE);

  const handlePagination = (direction: 1 | -1) => {
    setStart((prevStart) => {
      const newStart = prevStart + direction * SIZE;
      // ensure start between 0 and Max
      return Math.max(0, Math.min(newStart, max - SIZE));
    });
  };

  return (
    <div>
      <ul>
        {pageList.map((person) => {
          return (
            <li style={{ marginBottom: "10px" }} key={person.id}>
              <h3>
                ID:{person.id} {person.name}
              </h3>
              <p>{person.JobTitle}</p>
            </li>
          );
        })}
      </ul>
      <hr />
      <div style={{ marginTop: "10px", display: "flex", gap: "5px" }}>
        {start > 0 && (
          <button
            onClick={() => handlePagination(-1)}
            aria-label="Previous Page"
            style={buttonStyle}
          >
            Prev
          </button>
        )}
        {start + SIZE < max && (
          <button
            onClick={() => handlePagination(1)}
            aria-label="Next Page"
            style={buttonStyle}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

// slice the number of values shown
// if its larger than 3
// split the length up into the amount of pages required
// each with links to the next slice of values

export default Solution13;
