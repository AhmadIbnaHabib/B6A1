What are some differences between interfaces and types in TypeScript?
<!-- *********************************************************** -->
TypeScript-এ interfaces আর types মধ্যে কিছু পার্থক্য আছে।
Interface:
extends দিয়ে অন্য interface এর সাথে মিশানো যায়।
একই নামের interface বারবার লিখলে TypeScript এগুলো মিলে দেয়।

Type:
যেকোনো ধরনের টাইপ union, primitive, tuple তৈরি করতে পারে।
extends নেই, কিন্তু & দিয়ে টাইপ মিলিয়ে নতুন টাইপ বানানো যায়।
একই নামের type পুনরায় লিখলে error হয়।


Provide an example of using union and intersection types in TypeScript.
<!-- ************************************************************* -->
Union type হলো যেখানে একটি ভেরিয়েবল একাধিক টাইপের মান নিতে পারে,
যেমন string | number।
Intersection type হলো যেখানে দুটি টাইপ একসাথে মিক্স করা হয়,
যেমন {name: string} & {age: number}