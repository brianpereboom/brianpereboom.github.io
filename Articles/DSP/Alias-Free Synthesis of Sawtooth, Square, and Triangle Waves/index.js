function illustration1() {
    let illustration1 = document.getElementById("illustration1");
    const ctx = illustration1.getContext("2d");
    let xMax = illustration1.width;
    let yMax = illustration1.height = 50;
    let yMid = yMax >> 1;
    ctx.transform(1, 0, 0, -1, 0, yMax)
    const f = 4;
    ctx.beginPath();
    ctx.moveTo(0, yMax);
    for (let i = 0; i < f; i++)
    {
        ctx.lineTo(xMax * i / f, yMax);
        ctx.lineTo(xMax * (i + 1) / f, 0);
    }
    ctx.stroke();
}

function illustration2() {
    let illustration2 = document.getElementById("illustration2");
    const ctx = illustration2.getContext("2d");
    let xMax = illustration2.width;
    let yMax = illustration2.height = 50;
    ctx.transform(1, 0, 0, -1, 0, yMax)
    const f = 4;
    ctx.beginPath();
    ctx.moveTo(0, yMax);
    for (let i = 0; i < f; i++)
    {
        ctx.lineTo(xMax * i / f, yMax);
        ctx.lineTo(xMax * (i + 0.5) / f, yMax);
        ctx.lineTo(xMax * (i + 0.5) / f, 0);
        ctx.lineTo(xMax * (i + 1) / f, 0);
    }
    ctx.stroke();
}

function illustration3() {
    let illustration3 = document.getElementById("illustration3");
    const ctx = illustration3.getContext("2d");
    let xMax = illustration3.width;
    let yMax = illustration3.height = 50;
    ctx.transform(1, 0, 0, -1, 0, yMax)
    const f = 4;
    ctx.beginPath();
    ctx.moveTo(0, yMax);
    for (let i = 0; i < f; i++)
    {
        ctx.lineTo(xMax * (i + 0.5) / f, 0);
        ctx.lineTo(xMax * (i + 1.0) / f, yMax);
    }
    ctx.stroke();
}

function illustration4() {
    let illustration4 = document.getElementById("illustration4");
    const ctx = illustration4.getContext("2d");
    let xMax = illustration4.width;
    let yMax = illustration4.height = 50;
    ctx.transform(1, 0, 0, -1, 0, yMax)
    const f = 4;
    ctx.beginPath();
    ctx.moveTo(0, yMax >> 1);
    let scale = yMax / Math.PI;
    let omega = 2 * f * Math.PI / xMax;
    for (let i = 0; i < xMax; i++)
    {
        ctx.lineTo(i, ([1, 2, 3, 4, 5, 6].reduce((sum, j) => sum + Math.sin(omega * i * j) / j, 0) + 0.5 * Math.PI) * scale);
    }
    ctx.stroke();
}

function illustration5() {
    let illustration5 = document.getElementById("illustration5");
    const ctx = illustration5.getContext("2d");
    let xMax = illustration5.width;
    let yMax = illustration5.height = 50;
    ctx.transform(1, 0, 0, -1, 0, yMax)
    const f = 4;
    ctx.beginPath();
    ctx.moveTo(0, yMax >> 1);
    let scale = 2 * yMax / Math.PI;
    let omega = 2 * f * Math.PI / xMax;
    for (let i = 0; i < xMax; i++)
    {
        ctx.lineTo(i, ([1, 3, 5].reduce((sum, j) => sum + Math.sin(omega * i * j) / j, 0) + 0.25 * Math.PI) * scale);
    }
    ctx.stroke();
}

function illustration6() {
    let illustration6 = document.getElementById("illustration6");
    const ctx = illustration6.getContext("2d");
    let xMax = illustration6.width;
    let yMax = illustration6.height = 50;
    ctx.transform(1, 0, 0, -1, 0, yMax)
    const f = 4;
    ctx.beginPath();
    ctx.moveTo(0, yMax);
    let scale = 4 * yMax / (Math.PI * Math.PI);
    let omega = 2 * f * Math.PI / xMax;
    for (let i = 0; i < xMax; i++)
    {
        ctx.lineTo(i, ([1, 3, 5].reduce((sum, j) => sum + Math.cos(omega * i * j) / (j * j), 0) + 0.125 * Math.PI * Math.PI) * scale);
    }
    ctx.stroke();
}

function illustration7() {
    let illustration7 = document.getElementById("illustration7");
    const ctx = illustration7.getContext("2d");
    let xMax = illustration7.width;
    let yMax = illustration7.height = 50;
    let yMid = yMax >> 1;
    ctx.transform(1, 0, 0, -1, 0, yMax)
    const f = 4;
    const H = 6;
    ctx.beginPath();
    ctx.moveTo(0, yMid);
    let omega = 2 * f * Math.PI / xMax;
    let sawtooth = 0;
    for (let i = 0; i < xMax; i++)
    {
        let t = (i + 1) % (xMax / f);
        if (t === 0)
            sawtooth += 0.125 * f;
        else {
            t *= omega;
            sawtooth += 0.125 * f * ((Math.sin((H + 1) * t) + Math.sin(H * t)) / Math.sin(t) - 1);
        }
        ctx.lineTo(i, sawtooth + yMid);
    }
    ctx.stroke();
}

function illustration8() {
    let illustration8 = document.getElementById("illustration8");
    const ctx = illustration8.getContext("2d");
    let xMax = illustration8.width;
    let yMax = illustration8.height = 50;
    let xMid = xMax >> 1;
    let yMid = yMax >> 1;
    ctx.transform(1, 0, 0, -1, 0, yMax)
    const f = 4;
    const H = 6;
    ctx.beginPath();
    ctx.moveTo(0, yMid);
    let omega = 2 * f * Math.PI / xMax;
    let square = 0;
    for (let i = 0; i < xMax; i++)
    {
        let t = (i + 1) % (xMax / f);
        if (t === 0 || t === xMid / f)
            square += 0.25 * f;
        else {
            t *= omega;
            square += 0.25 * f * (Math.sin((H + 1) * t) + Math.sin((H - 1) * t)) / Math.sin(2 * t);
        }
        ctx.lineTo(i, square + yMid);
    }
    ctx.stroke();
}

function illustration9() {
    let illustration9 = document.getElementById("illustration9");
    const ctx = illustration9.getContext("2d");
    let xMax = illustration9.width;
    let yMax = illustration9.height = 50;
    let xMid = xMax >> 1;
    let yMid = yMax >> 1;
    ctx.transform(1, 0, 0, -1, 0, yMax)
    const f = 4;
    const H = 6;
    ctx.beginPath();
    ctx.moveTo(0, yMid);
    let omega = 2 * f * Math.PI / xMax;
    let square = 0;
    let triangle = 0;
    let scale = -4 * f / yMax;
    for (let i = 0; i < xMax; i++)
    {
        let t = (i + 1) % (xMax / f);
        if (t === 0 || t === xMid / f)
            square += 0.25 * f;
        else {
            t *= omega;
            square += 0.25 * f * (Math.sin((H + 1) * t) + Math.sin((H - 1) * t)) / Math.sin(2 * t);
        }
        triangle -= square;
        ctx.lineTo(i, 0.0625 * scale * triangle + yMid);
    }
    ctx.stroke();
}

document.addEventListener("DOMContentLoaded", () => {
    illustration1();
    illustration2();
    illustration3();
    illustration4();
    illustration5();
    illustration6();
    illustration7();
    illustration8();
    illustration9();
});