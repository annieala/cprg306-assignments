import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h1>Anne Marie Ala</h1>
      <p>
        My GitHub Repository:{"https://github.com/annieala/cprg306-assignments.git"}
        <Link href="https://github.com/annieala/cprg306-assignments.git"> 
         __CLICK HERE
        </Link>
      </p>
    </div>
  );
}
