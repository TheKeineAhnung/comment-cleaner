import { assert } from 'assertthat';
import { clean } from '../../../lib/tools/clean';

suite('groupCleaning', (): void => {
  suite('cleanGroupOne', (): void => {
    test(`test if string of group one is cleared correctly.`, async (): Promise<void> => {
      const commentString = `
let x: number = 0; 
//remove
/*
remove multiline
*/
console.log(x);
`;
      const expectedString = `
let x: number = 0;
console.log(x);
`.trim();

      const cleanedString = clean('ts', commentString);

      assert.that(cleanedString).is.identicalTo(expectedString);
    });
  });

  suite('cleanGroupTwo', (): void => {
    test(`test if string of group two is cleared correctly.`, async (): Promise<void> => {
      const commentString = `
test = "3"
# test
print(test)
`;
      const expectedString = `
test = "3"
print(test)
`.trim();

      const cleanedString = clean('python', commentString);

      assert.that(cleanedString).is.identicalTo(expectedString);
    });
  });

  suite('cleanGroupThree', (): void => {
    test(`test if string of group three is cleared correctly.`, async (): Promise<void> => {
      const commentString = `
<div>test</div>
<!-- test -->
`;
      const expectedString = `
<div>test</div>
`.trim();

      const cleanedString = clean('html', commentString);

      assert.that(cleanedString).is.identicalTo(expectedString);
    });
  });

  suite('cleanGroupFour', (): void => {
    test(`test if string of group four is cleared correctly.`, async (): Promise<void> => {
      const commentString = `
--Select all:
SELECT * FROM Customers;
SELECT * FROM Customers -- WHERE City='Berlin';
/*Select all the columns
of all the records
in the Customers table:*/
SELECT * FROM Customers;
SELECT CustomerName, /*City,*/ Country FROM Customers;
SELECT * FROM Customers WHERE (CustomerName LIKE 'L%'
OR CustomerName LIKE 'R%' /*OR CustomerName LIKE 'S%'
OR CustomerName LIKE 'T%'*/ OR CustomerName LIKE 'W%')
AND Country='USA'
ORDER BY CustomerName; 
`;
      const expectedString = `
SELECT * FROM Customers;
SELECT * FROM Customers
SELECT * FROM Customers;
SELECT CustomerName, Country FROM Customers;
SELECT * FROM Customers WHERE (CustomerName LIKE 'L%'
OR CustomerName LIKE 'R%' OR CustomerName LIKE 'W%')
AND Country='USA'
ORDER BY CustomerName; 
`.trim();

      // `SELECT * FROM Customers;
      // SELECT * FROM Customers
      // SELECT * FROM Customers;
      // SELECT CustomerName, Country FROM Customers;
      // SELECT * FROM Customers WHERE (CustomerName LIKE 'L%'
      // OR CustomerName LIKE 'R%' OR CustomerName LIKE 'W%')
      // AND Country='USA'
      // ORDER BY CustomerName;`

      const cleanedString = clean('sql', commentString);

      assert.that(cleanedString).is.identicalTo(expectedString);
    });
  });
});
