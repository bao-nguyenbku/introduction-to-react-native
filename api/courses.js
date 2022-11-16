const course = [
  {
    id: '238sdhfksdfs',
    name: "App Mobile Dev"
  },
  {
    id: 'dsjgdufger454',
    name: "DSA"
  },
  {
    id: '49584dfgkdfhg0803242',
    name: "PPL"
  },
  {
    id: 'fdjgd456402482sd',
    name: "System Architecture"
  },
  {
    id: '58dfjd42204282aada',
    name: "Software Engineering"
  },
  {
    id: '456840djgd08-23234256',
    name: "Nhập môn Lập trình"
  },
]

export function getAllCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(course)
    }, 1000)
  })
}