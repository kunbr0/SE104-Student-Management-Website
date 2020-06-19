// const root = '/query'
const syntaxes = 
{
    listStudentsInClass: `/list-students`,
    numberOfStudentsInClass: `/number-students`,

    insert: `/add`,
    update: `/update`,
    detail: `/detail/:id`,
    remove: `/remove/:id`
}

module.exports = syntaxes;