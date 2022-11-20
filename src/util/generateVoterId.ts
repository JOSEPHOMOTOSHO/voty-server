export const generateVoterId = () => {
  const first = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const sec = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const third = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const number = Math.floor(100000 + Math.random() * 900000);

  const id = `${first}${sec}${third}${number}`;
  return id;
};
