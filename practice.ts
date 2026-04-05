export {};

abstract class SchoolMember {
    abstract getRole(): string; // Subclasses MUST implement this
}

class Student extends SchoolMember {
    getRole() {
        return "Student";
    }
}

const member = new Student();
console.log(`The member role is: ${member.getRole()}`);