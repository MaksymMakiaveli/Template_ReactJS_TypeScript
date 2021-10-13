import md5 from 'md5';

export const emailValidation = (val: string) =>
  val.length > 0
    ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        val
      )
    : true;

export const flatten = (arr: []) =>
  arr.reduce((flat, next) => flat.concat(next), []);

export const keyGenerate = (date: string) => md5(`FakeDating${date}`);

// export const insertToArray = (array: [], action: { index: number, item: any }) => ([
//   ...array.slice(0, action.index),
//   action.item,
//   ...array.slice(action.index),
// ]);
//
export const removeFromArray = (array: any[], action: { index: number }) => [
  ...array.slice(0, action.index),
  ...array.slice(action.index + 1),
];
//
// export const updateObjectInArray = (array: [], action: { index: number, item: any }) => (
//   array.map((item, index) => {
//     if (index !== action.index) {
//       return item;
//     }
//     return {
//       ...item,
//       ...action.item,
//     };
//   })
// );

export const clearEmptyFields = (obj: { [k: string]: any }) =>
  Object.keys(obj)
    .filter(
      (key) => obj[key] !== null && obj[key] !== undefined && obj[key] !== ''
    )
    .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});

export const toBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
export const toFeet = (cm: number) => {
  const realFeet = (cm * 0.3937) / 12;
  const feet = Math.floor(realFeet);
  const inches = Math.round((realFeet - feet) * 12);
  return `${feet}'${inches}''`;
};
export const calculateAge = (birthday: string, now: string) => {
  const dateNow = new Date(now);
  const dateBirthday = new Date(birthday);
  const ageDifMs = dateNow.getTime() - dateBirthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const parseObjectKeys = (obj: { [k: string]: string }) => {
  const newObj: { [k: string]: any } = {};
  Object.keys(obj).forEach((name) => {
    let res = newObj;
    name.split('.').forEach((aName, index, names) => {
      if (!res[aName]) {
        if (index === names.length - 1) {
          res[aName] = obj[name];
        } else {
          res[aName] = {};
        }
      }
      res = res[aName];
    });
  });
  return newObj;
};

export const arrayToMap = <T extends { id: string | number }>(arr: T[]) =>
  arr.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item,
    }),
    {}
  );

export const getDaysInMonth = (month: number, year: number) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const concatActions = <S1 extends string, S2 extends string>(
  s1: S1,
  s2: S2
) => (s1 + s2) as `${S1}${S2}`;

export const removeKeyFromObject = <T>(obj: T, omitKey: string) =>
  (Object.keys(obj) as Array<keyof typeof obj>).reduce((result, key) => {
    if (key !== omitKey) {
      return { ...result, [key]: obj[key] };
    }
    return result;
  }, {});
