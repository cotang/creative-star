# SVG-спрайт с использованием символов

Из файлов папки `svg/` в папку `img/` будет сгенерирован файл спрайта `sprite-svg--ls.svg`. 

Если less-файл импортирован, то в сборку будет взят `sprite-svg--localstorage.js` и изображения из `img/` будут скопированы в папку сборки, можно использовать спрайт.

**ВНИМАНИЕ: При начале новой разработки на localhost не забудьте стереть запись inlineSVGdata из localStorage!**

## Как это работает

После загрузки страницы срабатывает JS, который проверяет: есть ли в localStorage запись с текстом спрайта. Если есть, текст спрайта вставляется после открывающего `body`, если нет, JS делает асинхронный запрос на сервер, получает файл спрайта, пишет его в localStorage и потом вставляет на страницу.

В JS-файле есть переменная с ревизией спрайта. Если её поменять, произойдёт обновление спрайта в localStorage.

Сам спрайт имеет вид:

```svg
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="icon-1" viewBox="0 0 30 30"><path fill="#444" d="..."/></symbol>
  <symbol id="icon-2" viewBox="0 0 28 28"><path fill="#444" d="..."/></symbol>
</svg>
```

Для вставки на страницу используйте конструкции `svg > use` со ссылками на `id` символа:

```html
<svg width="30" height="30"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-1"></use></svg>
```

Работает только в условиях работы localStorage! (При запросе страниц с сервера).


[Ещё пример использования SVG-спрайта](http://codepen.io/nicothin/pen/qbmwNP?editors=1100) (вставка скрытого SVG со спрайтом происходит не JS-ом, а простой вставкой в разметку).
