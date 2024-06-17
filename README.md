# Tasks Node

## Descrição

API para gerenciamento de tarefas (To-Do List) desenvolvida com Node.js, Fastify, TypeScript e PostgreSQL, seguindo os princípios de Arquitetura Limpa (Clean Architecture).

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Endpoints](#endpoints)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Tecnologias Utilizadas

- Node.js
- Fastify
- TypeScript
- PostgreSQL
- TypeORM
- bcryptjs
- jsonwebtoken
- class-transformer
- class-validator
- uuid

## Instalação

1. Clone o repositório:

   ```bash
    git clone https://github.com/Lvitoria/tasks-node.git
    cd tasks-node
    ```
2. Instale as dependências:

    ```bash
            npm install
    ```

## Execução
1 Para compilar o projeto:

```bash
npm run build
```

2. Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

```bash
npm start
```


## Endpoints
#### Autenticação
    * POST /auth/register - Registrar um novo usuário
    * POST /auth/login - Fazer login
#### Tarefas
    * GET /tasks - Listar todas as tarefas
    * POST /tasks - Criar uma nova tarefa
    * GET /tasks/:id - Obter uma tarefa pelo ID
    * PUT /tasks/:id - Atualizar uma tarefa pelo ID
    * DELETE /tasks/:id - Deletar uma tarefa pelo ID

## Contribuição
1. Faça um fork do projeto
2. Crie uma nova branch (git checkout -b feature/nova-feature)
3. Commit suas mudanças (git commit -m 'Adiciona nova feature')
4. Faça um push para a branch (git push origin feature/nova-feature)
5. Abra um Pull Request

