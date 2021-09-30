#Language : pt

Funcionalidade: pesquisar
    Como usuário na web
    Quero pesquisar nome de páginas
    Para obter link de acesso 

    Esquema de cenário: Pesquisar páginas
        Dado que esteja na aba de pesquisa do navegador
        Quando pesquisar nome da página "<pagina>"
        Então deverá ser exibido links de acesso para a página "<pagina>"

    Cenário: Pesquisar por youtube
        Dado que esteja na aba de pesquisa do navegador
        Quando pesquisar por youtube
        Então deverá ser exibido links de acesso para o youtube
    
    Esquema de cenário: Pesquisar canal no Youtube
        Dado que esteja na página inicial do Youtube
        Quando pesquisar um canal "<canal>"
        Então deverá mostrar resultados para a pesquisa "<canal>"
    
    Cenário: Pesquisar por canal "Compasso UOL"
        Dado que esteja na página inicial do youtube
        Quando pesquisar por canal "Compasso UOL"
        Então deverão ser exibidos resultados de canais correspondentes ao nome "Compasso UOL"

Funcionalidade: validar
    Como usuário na aplicação
    Quero pesquisar canais
    Para saber se são válidos

        Contexto: página do youtube
        Dado que esteja na página inicial do Youtube
        E entrar na aba de pesquisa

        Esquema de cenário: validação de Pesquisa de canal
            Dado pesquisar por canal "<tipo>"
            Então deverá ser exibido a mensagem "<msg>"
            Exemplos: 
            |tipo                   |                        msg                         | 
            |existente              |          Resultados para sua pesquisa              |
            |inexistente            |             Conteúdo não encontrado                |

Funcionalidade: Acessar 
    Como usuário na aplicação
    Quero acessar canal da aplicação
    Para acessar conteúdo do canal

        Esquema de cenário: Acessar página
            Dado que esteja na pagina de resultados de pesquisa do navegador
            Quando acessar o link de direcionamento para pagina "<pagina>"
            Então Deverá ser exibida a página "<pagina>"

        Cenário: Acessar página do youtube
            Dado que esteja na pagina de resultados de pesquisa do navegador
            Quando acessar o link de direcionamento do youtube
            Então Deverá ser exibida a página do youtube

        Esquema de cenário: Acessar canal
            Dado que exibidos os resultados de pesquisa de canais "<canal>"
            Quando clicar no ícone
            Então deverá ser acessado o canal "<canal>"

        Cenário: Acessar canal "Compasso UOL"
            Dado que exibidos os resultados de pesquisa para "compasso UOL"
            Quando clicar no ícone do desejado
            Então deverá ser acessado o canal "Compasso UOL"

        Esquema de cenário: Acessar a abas
            Dado que esteja na página inicial do canal
            Quando clicar na aba "<aba>" 
            Então deverão ser exibidas informações contidas na aba "<aba>"

        Cenário: Acessar a aba "sobre"
            Dado que esteja na página inicial do canal
            Quando clicar na aba "sobre"
            Então deverão ser exibidas informações do canal

Funcionalidade: visualização
    Como usuário na aplicação
    Quero visualizar as informações
    Para saber as informações

        Cenário: visualização views do canal
            Dado esteja na página de um canal
            Quando acessada a aba "sobre"
            Então Deverá estar contido e ser exibido o número de vizualizações do canal
        
        




