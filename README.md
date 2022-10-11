# DAC - Desenvolvimento de Aplicações Corporativas

### 2 - a)
```
docker container run tomcat
```
> O comando acima inicializa uma instancia do Servidor Web TomCat, que é um servidor Java EE desenvolvido pela Apache.

<br/>

### 2 - b) 
```
docker container ls
```
> O comando acima exibe uma lista dos containers em execução no momento. Caso deseje visualizar todos os containers, mesmo os que estão desligados, utilize o argumento ``-a``, dessa forma: 
```docker container ls -a```

<br/>

### 2 - c)
```
docker image ls
```
> O comando acima exibe uma lista de todas as imagens que estão salvas na máquina atual, a partir dessas imagens é possível criar Containers.

<br/>

### 4 - 
> Usar containers permite desenvolver aplicações que podem ser executadas em diferentes sistemas operacionais, sem a necessidade de configurações adicionais. 

<br/>

### 5 - 

> A maior dificuldade que encontrei no desenvolvimento foi conectar a aplicação ao banco de dados utilizando o docker-compose.
