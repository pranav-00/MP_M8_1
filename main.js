const stop = { swargate: [18.5018, 73.8636], PICT: [18.4575, 73.8508] };
var next = document.getElementById('next')
if (stop.swargate(0) - 0.001 <= lat <= stop.swargate(0) + 0.001 && stop.swargate(1) - 0.001 <= lon <= stop.swargate(1) + 0.001) {
    next.innerText = "PICT";
}
else if (stop.PICT(0) - 0.001 <= lat <= stop.PICT(0) + 0.001 && stop.PICT(1) - 0.001 <= lon <= stop.PICT(1) + 0.001) {
    next.innerText = "Swargate";
}