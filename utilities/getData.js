const getData = async () => {
  try {
    const response = await fetch(
      "https://iti-api-exam-system.vercel.app/client-side/mcqs"
    );
    // const response = await fetch("https://iti-api-exam-system.vercel.app/client-side/error");
    // const response = await fetch("https://iti-api-exam-system.vercel.app/client-side/empty");
    const data = (await response.json()).data.slice(107, 117);
    const mcqs = [];
    if (!response.ok || !data.length) throw new Error("Error");
    let random = (Math.random() * 9).toFixed() * 1;
    while (mcqs.length < 10) {
      mcqs.push(data[random]);
      random = (random + 1) % 10;
    }

    return mcqs;
  } catch (error) {
    $("#_exam").addClass("error").children().addClass("d-none");
  }
};

export default getData;
