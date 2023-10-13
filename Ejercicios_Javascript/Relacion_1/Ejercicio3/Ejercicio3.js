function comprobar(l1, l2, l3) {
    if (l1 == l2 && l2 == l3) {
        document.write("Triengulo Equilatero");
    }
    else
        if (l1 == l2 && l2 != l3) {
            document.write("Triengulo Isósceles");
        }
        else
            document.write("Triengulo Escaleno");
}
