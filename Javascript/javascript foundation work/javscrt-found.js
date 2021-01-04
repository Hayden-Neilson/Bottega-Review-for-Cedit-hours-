// How to Pull Images from Instagram with JavaScript for a person

const images = document.querySelectorAll('.FFVAD') 

images.forEach(img => console.log(img.src));

let imageUrlArray = [];

images.forEach(img => imageUrlArray.push(img.src));


// Auto Following Accounts and Hashtags on LinkedIn with JavaScript

let hashtagBtns = document.querySelectorAll('.mn-discovery-hashtag-card__action-btn')

hashtagBtns.forEach(btn => btn.click())

const followingBtns = document.querySelectorAll('.follows-recommendation-card__follow-btn')

followingBtns.forEach(followbtn => followbtn.click())