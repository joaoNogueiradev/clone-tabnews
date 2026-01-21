function status(request, response) {
  response.status(200).json({ message: "it is all good" });
}

export default status;
