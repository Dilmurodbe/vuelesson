<script>
import Button from "../components/Button.vue";
export default {
  name: "UyIshi",
  components: {
    Button,
  },
  data() {
    return {
      fullname: JSON.parse(localStorage.getItem("info")) || [],
      update: false,
      form: {
        text: "",
      },
      currentindex: null,
    };
  },

  methods: {
    func() {
      // inputga hech nima yozilmasa
      if (this.form.text === null || this.form.text === "") {
        alert("email yoki name xato kiritilgan");
      } else {
        // nimadir yoki  task yozilsa
        if (this.update) {
          // update false yangilaydi
          this.update = false;
          this.fullname[this.currentindex] = this.form;
          this.form = { text: "" };
        } else {
          // add task
          this.fullname.push(this.form), (this.form = { text: "" });
          localStorage.setItem("info", JSON.stringify(this.fullname));
        }
      }
    },
    updateFunction(item) {      
      this.form.text = item.text;
      this.update = true;
      this.currentindex = this.fullname.findIndex(
        (task) => task.text === item.text
      );
      this.form.text = item.text;
    },

    remove(item) {
      let index = this.fullname.indexOf(item);
      this.fullname.splice(index, 1);
      localStorage.setItem("info", JSON.stringify(this.fullname));
      console.log(item);
    },
  },
};
</script>
<template>
  <div class="footer">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center flex-column">
        <div class="div">
          <div class="turt">
            <input v-model="form.text" type="text " placeholder="name" />

            <Button @click="func" class="button" name="push" />
          </div>
        </div>
        <div class="footer-div d-flex flex-column">
          <h3
            class="text-white d-flex justify-content-between"
            v-for="item in fullname"
            :key="item"
          >
            <p>{{ item.text }}</p>
            <Button @click="remove(item)" class="button1" name=" x " />
            <Button
              @click="updateFunction(item)"
              class="button1"
              name=" edit"
            />
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
p {
  margin: 40px;
  font-size: 28px;
}
.footer-div p {
  text-align: center;
  font-size: 24px;
  color: black;
}
.footer-div {
  background-color: aqua;
  border-radius: 10px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;

  margin-top: 40px;
  align-items: center;
}
.text {
  font-size: 25px;
  color: black;
}
.fullname {
  font-size: 24px;
  color: rgb(0, 0, 0);
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
.button1 {
  font-size: 20px;
  color: black;
  background-color: rgb(253, 183, 98);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  border: none;
  margin: 10px 40px;
  text-align: center;
}
.footer {
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
}
.push {
  font-size: 20px;
  color: rgb(137, 209, 231);
  padding: 10px 20px;
  border-radius: 10px;
  background-color: aquamarine;
  border: none;
}
.turt {
  width: 100%;
  height: 100px;
}
.push {
  width: 200px;
  height: auto;
  margin-top: 20px;
}
input {
  padding: 10px 400px;
  margin: 10px 40px;
}
.div {
  width: 100%;
  height: 100px;
  background-color: antiquewhite;
  border-radius: 10px;
  box-shadow: 0px -7px 46px -2px;
}
</style>
