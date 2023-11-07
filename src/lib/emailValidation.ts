export default function emailValidation(email: string) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log(emailPattern.test(email));
  return emailPattern.test(email);
}
