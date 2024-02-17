// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

// function getLearnerData(course, ag, submissions) {
//   // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);

// Function to process learner submissions and calculate averages.

// Declare variables properly using let and const where appropriate.
function getLearnerData(course, ag, submissions) {
  // Object to store processed learner data.
  const learnerData = {};

  try {
    // Process learner submissions
    submissions.forEach(submission => {
      // Declare variables using const and let.
      const learnerID = submission.learner_id;
      const assignmentID = submission.assignment_id;
      const score = submission.submission.score;

      // If learner data doesn't exist, create a new entry.
      if (!learnerData[learnerID]) {
        learnerData[learnerID] = {
          id: learnerID,
          totalScore: 0,
          totalPoints: 0,
          scores: {}
        };
      }
 // Find the assignment based on assignment ID.
 const assignment = ag.assignments.find(a => a.id === assignmentID);
   // If assignment is not found, throw an error.
   if (!assignment) {
    throw new Error(`Assignment with ID ${assignmentID} not found.`);
  }

  // Calculate points possible for the assignment.
  const pointsPossible = assignment.points_possible;

  // Update learner data with submission information.
  learnerData[learnerID].totalScore += score;
  learnerData[learnerID].totalPoints += pointsPossible;
  learnerData[learnerID].scores[assignmentID] = score / pointsPossible;
});
  
// Calculate averages for each learner using a loop.
const result = Object.values(learnerData).map(learner => {
  const avg = learner.totalScore / learner.totalPoints;
  return {
    id: learner.id,
    avg: avg.toFixed(3),
    ...learner.scores
  };
});


// Utilize at least one loop control keyword such as break or continue.
for (let i = 0; i < result.length; i++) {
  // Demonstrate the retrieval, manipulation, and removal of items in an array.
  const learnerInfo = result[i];
  console.log(`Learner ID: ${learnerInfo.id}, Average Score: ${learnerInfo.avg}`);
  // Optionally manipulate or remove items in the array.
}
  