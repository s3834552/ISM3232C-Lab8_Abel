"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SchoolMember {
}
class Student extends SchoolMember {
    getRole() {
        return "Student";
    }
}
const member = new Student();
console.log(`The member role is: ${member.getRole()}`);
//# sourceMappingURL=practice.js.map