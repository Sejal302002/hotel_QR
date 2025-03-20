const qrCodeContainer = document.getElementById('qrcode');

// Use a relative URL since Netlify/Vercel handles paths dynamically
const qrCodeUrl = window.location.origin + '/menu.html';

QRCode.toCanvas(qrCodeContainer, qrCodeUrl, {
    width: 200,
    margin: 2,
    color: {
        dark: '#000000',
        light: '#ffffff'
    }
}, function (error) {
    if (error) console.error(error);
    console.log('QR code generated successfully!');
});
