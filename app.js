import db from './firebase-config.js';

const form = document.getElementById('wish-form');
const nameInput = document.getElementById('name');
const wishInput = document.getElementById('message');
const wishesList = document.getElementById('wish-board');

// إرسال البيانات إلى Firestore
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const wish = wishInput.value;

  db.collection('wishes').add({
    name: name,
    wish: wish,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    console.log('Wish added!');
    nameInput.value = '';
    wishInput.value = '';
    loadWishes();  // تحميل الأمنيات بعد إضافة الأمنية الجديدة
  })
  .catch((error) => {
    console.error('Error adding wish: ', error);
  });
});

// تحميل الأمنيات من Firestore
const loadWishes = () => {
  db.collection('wishes').orderBy('timestamp', 'desc')
    .get()
    .then((querySnapshot) => {
      wishesList.innerHTML = '<p class="text-center" id="placeholder-message">No wishes yet. Be the first to share your thoughts!</p>';
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const wishElement = document.createElement('div');
        wishElement.innerHTML = `<p><strong>${data.name}</strong>: ${data.wish}</p>`;
        wishesList.appendChild(wishElement);
      });
    });
};
loadWishes();