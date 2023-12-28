## React + TypeScript + Vite

### Demo
[Github-pages](https://chiga2030.github.io/super-data-picker/)

### Start
```bash
npm run start
```


Цель данного проекта - реализовать UI компонент для выбора интервала дат.

Реализованная функциональность:
1. Выбора даты начала и конца временного интервала.
2. Поддержка абсолютных дат.
3. Поддержка относительных дат.
4. Быстрый выбор дат (некоторое множество заранее подготовленных вариантов выбора временных интервалов).
5. Недавно использованные диапазоны дат.


### Применение
```ts
function App () {
  const changeStartDateCallback = (value: Date) => {
    console.log(value)
  }

  const changeEndDateCallback = (value: Date) => {
    console.log(value)
  }


  return (
    <SuperDatePicker
      onChangeStartDate={ changeStartDateCallback }
      onChangeEndDate={ changeEndDateCallback }
    />
  )
}
```
