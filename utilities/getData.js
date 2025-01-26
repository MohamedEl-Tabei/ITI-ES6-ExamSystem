const getData = async () => {
  try {
    const response = await fetch(
      "https://iti-api-exam-system.vercel.app/client-side/mcqs"
    );
    // const response = await fetch("https://iti-api-exam-system.vercel.app/client-side/error");
    // const response = await fetch("https://iti-api-exam-system.vercel.app/client-side/empty");
    const mcqs = (await response.json()).data;
    if (!response.ok || !mcqs.length) throw new Error("Error");
    const random = (Math.random() * 10).toFixed();
    const start = (Math.random() * mcqs.length).toFixed() * 1 - 10;
    const end = 1 * start + 10;
    mcqs.sort((a, b) => a._id[random] - b._id[random]);
    return mcqs.slice(start, end);
  } catch (error) {
    $("#_exam").addClass("error").children().addClass("d-none");
  }
};

export default getData;
