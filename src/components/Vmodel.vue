<script>
import Button from "../components/Button.vue";
export default {
  name: "HomepPage",
  components: {
    Button,
  },
  data() {
    return {
      fullname: JSON.parse(localStorage.getItem("info")) || [],

      form: {
        name: "",
        email: "  @gmail.com",
      },
    };
  },

  methods: {
    func() {
      if (this.form.email === null || this.form.email === "") {
        alert("email yoki name xato kiritilgan");
      } else {
        this.fullname.push(this.form), (this.form = { name: "", email: "" });
        localStorage.setItem("info", JSON.stringify(this.fullname));
      }
    },

    remove() {
      localStorage.removeItem("info");
      this.fullname = []
    },
  },
};
</script>
<template>
  <div class="footer">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center flex-column">
        <h3 class="text-white" v-for="olma in fullname" :key="olma.id">
          <p>your name: {{ olma.name }}</p>
          <span>{{ olma.email }}</span>
        </h3>
        <Button @click="remove" class="button" name="x" />

        <div class="div">
          <div class="turt">
            <h3>name</h3>
            <input v-model="form.name" type="text " placeholder="name" />
            <h3>email</h3>
            <input v-model="form.email" type="text" placeholder="email" /><br />
            <Button @click="func" class="button" name="push" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.fullname {
  font-size: 24px;
  color: aliceblue;
}
.button {
  font-size: 20px;
  color: black;
  background-color: rgb(253, 183, 98);
  border-radius: 10px;
  padding: 10px 73px;
  border: none;
  margin-top: 20px;
}
.footer {
  width: 100%;
  height: 100vh;
  background-color: rgb(44, 44, 44);
}
.push {
  font-size: 20px;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  border-radius: 10px;
  background-color: aquamarine;
  border: none;
}
.turt {
  padding: 30px;
}
.push {
  width: 200px;
  height: auto;
  margin-top: 20px;
}
input {
  margin-top: 10px;
}
.div {
  background-color: antiquewhite;
  border-radius: 10px;
}
</style>
