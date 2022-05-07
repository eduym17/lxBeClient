import http from "../http-common";

class ExampleService {
  getAll() {
    return http.get("/example");
  }
  get(id) {
    return http.get(`/example/${id}`);
  }
  create(data) {
    return http.post("/example", data);
  }
  update(id, data) {
    return http.put(`/example/${id}`, data);
  }
  delete(id) {
    return http.delete(`/example/${id}`);
  }
}

export default new ExampleService();
