import bcrypt from "bcrypt";

const passward="toxictony";
async function Hashing(){
const hashpass=await bcrypt.hash(passward,10);
// console.log(hashpass);

const ans = await bcrypt.compare(passward,hashpass);
console.log(ans);


}
Hashing();


