// Unir con -- y volver a minusculas
function parse_to_url(title) {
    return title.split(' ').join('-').toLowerCase()
}

parse_to_url("La forma de correr Python");
parse_to_url("La API para nunca parar de aprender");
parse_to_url("Curso de arrays");