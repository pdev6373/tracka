function formaterrMessage(err: string | Record<string, string[]>) {
  if (typeof err === "object") {
    const keys = Object.keys(err);
    return err[keys[0]][0];
  }
  if (typeof err === "string") return err;
}

export default formaterrMessage;
