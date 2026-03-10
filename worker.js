// push 03/09/2026 22:51:29
export default {
  async fetch(){
    return new Response("e2e-tests", {
      headers: {"content-type":"text/plain"}
    })
  }
}
