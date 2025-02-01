import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./table";
  
const ITEMS_PER_PAGE = 10

const getDifficultyClass = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "text-green-500";
    case "Medium":
      return "text-yellow-500";
    case "Hard":
      return "text-red-500";
    default:
      return "";
  }
};

const LeetcodeDashboard = ({ data }) => {
  return (
    <div className = "p-6 w-full rounded-lg shadow-md bg-blue-800">
    <Card>
      <CardHeader>
        <CardTitle>Leetcode Questions</CardTitle>
        <CardDescription>Top 10 Leetcode questions</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Question</TableCell>
              <TableCell>Difficulty</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.slice(0, ITEMS_PER_PAGE).map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell className={getDifficultyClass(item.difficulty)}>{item.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    </div>
  );
};

const mockData = [
  { id: 1, title: "Two Sum", difficulty: "Easy" },
  { id: 2, title: "Add Two Numbers", difficulty: "Medium" },
  { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
  { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard" },
  { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium" },
  { id: 6, title: "ZigZag Conversion", difficulty: "Medium" },
  { id: 7, title: "Reverse Integer", difficulty: "Easy" },
  { id: 8, title: "String to Integer (atoi)", difficulty: "Medium" },
  { id: 9, title: "Palindrome Number", difficulty: "Easy" },
  { id: 10, title: "Regular Expression Matching", difficulty: "Hard" },
];

