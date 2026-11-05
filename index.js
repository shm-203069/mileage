// പോർട്ട് ലിസൺ ചെയ്യുന്നത് കൂടാതെ
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));

// ഇത് ഏറ്റവും താഴെ ചേർക്കുക:
module.exports = app;