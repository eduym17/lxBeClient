import http from "../http-common";

class StackService {
  getAll() {
    return http.get("/stacks");
  }
  get(id) {
    return http.get(`/stacks/${id}`);
  }
  create(data) {
    return http.post("/stacks", data);
  }
  update(id, data) {
    return http.put(`/stacks/${id}`, data);
  }
  delete(id) {
    return http.delete(`/stacks/${id}`);
  }
}

export default new StackService();