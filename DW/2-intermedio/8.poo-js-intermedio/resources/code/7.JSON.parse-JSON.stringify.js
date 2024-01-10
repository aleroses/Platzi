const object_one = {
  a: "one",
  b: "two",
  c: {
    d: "three",
    e: "four",
  },

	edit() {
		this.a = "new valor"
	}
};

const text_object = JSON.stringify(object_one);
const object_two = JSON.parse(text_object);

object_one.a = "AAA";
object_one.c.d = "DDD";

object_two.b = "BBB";
object_two.c.e = "EEE";

console.log({ object_one, object_two });
