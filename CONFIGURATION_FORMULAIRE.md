# Configuration du Formulaire de Contact

## 📧 Recevoir les messages à votre email : lanavallee@gmail.com

Le formulaire de contact utilise **Formspree**, un service gratuit qui envoie automatiquement les soumissions de formulaire à votre email.

---

## 🚀 Étapes de Configuration (5 minutes)

### 1. Créer un compte Formspree (gratuit)

1. Allez sur : **https://formspree.io/**
2. Cliquez sur **"Get Started"** ou **"Sign Up"**
3. Inscrivez-vous avec votre email : **lanavallee@gmail.com**
4. Vérifiez votre email et confirmez votre compte

### 2. Créer un nouveau formulaire

1. Une fois connecté, cliquez sur **"+ New Form"**
2. Donnez un nom à votre formulaire : `Contact Lana`
3. Entrez votre email de réception : **lanavallee@gmail.com**
4. Cliquez sur **"Create Form"**

### 3. Récupérer votre Form ID

Après la création, Formspree vous donne un **Form ID** qui ressemble à :
```
xyzabc123
```

Ou une URL complète comme :
```
https://formspree.io/f/xyzabc123
```

### 4. Mettre à jour le fichier HTML

1. Ouvrez le fichier : `index.html`
2. Cherchez la ligne (environ ligne 299) :
```html
<form class="contact__form reveal" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
```
3. Remplacez `YOUR_FORM_ID` par votre Form ID réel
4. Exemple final :
```html
<form class="contact__form reveal" id="contactForm" action="https://formspree.io/f/xyzabc123" method="POST" novalidate>
```
5. **Sauvegardez le fichier**

---

## ✅ C'est Terminé !

Maintenant, quand quelqu'un remplit le formulaire sur votre site :

1. Les informations sont envoyées à Formspree
2. Formspree vous les transfère par email à : **lanavallee@gmail.com**
3. Vous recevez un email avec :
   - Nom du visiteur
   - Email du visiteur
   - Nom de l'institut (si renseigné)
   - Message

---

## 📊 Plan Gratuit Formspree

Le plan gratuit inclut :
- ✅ **50 soumissions par mois**
- ✅ Protection anti-spam
- ✅ Réponse automatique
- ✅ Notifications par email

Si vous dépassez 50 messages/mois, vous pouvez passer au plan payant (8$/mois pour 1000 soumissions).

---

## 🔧 Alternative : EmailJS (si vous préférez)

Si vous préférez une autre solution, vous pouvez utiliser **EmailJS** :
1. Inscrivez-vous sur : https://www.emailjs.com/
2. Configurez votre service email (Gmail)
3. Créez un template
4. Je pourrai modifier le code JavaScript pour utiliser EmailJS

Contactez-moi si vous voulez cette alternative.

---

## ❓ Besoin d'Aide ?

Si vous avez des questions ou besoin d'aide pour la configuration, n'hésitez pas !
