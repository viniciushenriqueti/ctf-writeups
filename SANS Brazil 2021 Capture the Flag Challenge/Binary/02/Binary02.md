

## Binary 02

> "We have a binary at https://cgames-files.allyourbases.co/bm01.zip
> which appears to do little more than ask for your name and give back a
> friendly message. What do you think, is there more to it than first
> appears?"

Na segunda flag, temos um binário chamado *hey*.. uma função a princípio que parece bem básica, ele espera o input e apresenta o output..

![View](Binary02.png)

Nesse caso como se trata de um binário, é comum em CTF termos que explorar buffer overflow...

Então achei necessário brincar com a quantidade de caracteres suportados:
![View](Binary02-strings.png)

E encontramos uma quantidade máxima de caracteres..e a nossa flag. :D

![View](Binary02-Check.png)


