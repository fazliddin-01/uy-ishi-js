let son =+prompt('qoylar sonini kiriting')
while(isNaN(son) || son == 0) {
  son =+prompt('xatolik yuz berdi iltimos boshidan yozing')
}
for (let i = 1; i <= son; i++) {
  console.log(i + " qoylar...");
}