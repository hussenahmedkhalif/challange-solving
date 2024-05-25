function calculateNSSF(grossSalary) {
    let nssf = Math.min(grossSalary * 0.06, 1050);
    return nssf;
}

function calculatePAYE(taxableIncome) {
    let paye;
    if (taxableIncome <= 25000) {
        paye = taxableIncome * 0.1;
    } else if (taxableIncome <= 30000) {
        paye = (25000 * 0.1) + ((taxableIncome - 25000) * 0.30);
    } else {
        paye = (25000 * 0.1) + (5000 * 0.30) + ((taxableIncome - 30000) * 0.3);
    }
    return paye;
}

function calculateNHIF(grossSalary) {
    const nhifRates = [
        { limit: 4999, rate: 120 },
        { limit: 6999, rate: 250 },
        { limit: 10999, rate: 350 },
        { limit: 13999, rate: 450 },
        { limit: 17999, rate: 500 },
        { limit: 23999, rate: 700 },
        { limit: 28999, rate: 850 },
        { limit: 33999, rate: 900 },
        { limit: 37999, rate: 950 },
        { limit: 43999, rate: 1000 },
        { limit: 47999, rate: 1050 },
        { limit: 57999, rate: 1150 },
        { limit: 66999, rate: 1250 },
        { limit: 75999, rate: 1300 },
        { limit: 86999, rate: 1450 },
        { limit: 99999, rate: 1550 }
    ];
    let nhif = 1600; // Default rate if grossSalary exceeds 99999
    for (let i = 0; i < nhifRates.length; i++) {
        if (grossSalary <= nhifRates[i].limit) {
            nhif = nhifRates[i].rate;
            break;
        }
    }
    return nhif;
}

function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let nssf = calculateNSSF(grossSalary);
    let taxableIncome = grossSalary - nssf;
    let paye = calculatePAYE(taxableIncome);
    let nhif = calculateNHIF(grossSalary);
    let netSalary = grossSalary - (paye + nhif + nssf);

    return {
        grossSalary: grossSalary,
        nssfDeduction: nssf,
        taxableIncome: taxableIncome,
        payeTax: paye,
        nhifDeduction: nhif,
        netSalary: netSalary
    };
}

function calculateMultipleSalaries() {
    let continueCalculating = true;
    while (continueCalculating) {
        let basicSalary = parseFloat(prompt("Enter Basic Salary: "));
        let benefits = parseFloat(prompt("Enter Benefits: "));

        if (isNaN(basicSalary) || isNaN(benefits)) {
            alert("Invalid input. Please enter numeric values.");
            continue;
        }

        let salaryDetails = calculateNetSalary(basicSalary, benefits);

        console.log("Gross Salary: " + salaryDetails.grossSalary.toFixed(2));
        console.log("NSSF Deduction: " + salaryDetails.nssfDeduction.toFixed(2));
        console.log("Taxable Income: " + salaryDetails.taxableIncome.toFixed(2));
        console.log("PAYE (Tax): " + salaryDetails.payeTax.toFixed(2));
        console.log("NHIF Deduction: " + salaryDetails.nhifDeduction.toFixed(2));
        console.log("Net Salary: " + salaryDetails.netSalary.toFixed(2));

        continueCalculating = confirm("Do you want to calculate another net salary?");
    }
}

calculateMultipleSalaries();
