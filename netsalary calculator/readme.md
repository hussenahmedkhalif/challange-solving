# Net Salary Calculator

A simple JavaScript program to calculate an individual's Net Salary by taking inputs for basic salary and benefits. The calculator computes the gross salary, NSSF deductions, PAYE (tax), NHIF deductions, and the final net salary based on the Kenyan tax rates and deductions.

## Features

- Calculate Gross Salary
- Calculate NSSF Deductions
- Calculate PAYE (Tax)
- Calculate NHIF Deductions
- Calculate Net Salary
- Support for multiple salary calculations in one session

## Usage

1. Clone the repository or download the files.
2. Open the `index.html` file in a web browser.
3. Follow the prompts to input the basic salary and benefits.
4. The calculator will display the detailed salary breakdown in the console.
5. You can choose to calculate another salary or exit.

## Functions

### calculateNSSF(grossSalary)

Calculates the NSSF deduction based on the gross salary. The maximum NSSF deduction is capped at 1050 KES.

### calculatePAYE(taxableIncome)

Calculates the PAYE tax based on the taxable income using the Kenyan tax brackets.

### calculateNHIF(grossSalary)

Calculates the NHIF deduction based on the gross salary using predefined NHIF rates.

### calculateNetSalary(basicSalary, benefits)

Calculates the gross salary, NSSF deduction, taxable income, PAYE tax, NHIF deduction, and net salary based on the input basic salary and benefits.


## Example

Here is an example of how to use the calculator:

1. Enter Basic Salary: `50000`
2. Enter Benefits: `10000`

