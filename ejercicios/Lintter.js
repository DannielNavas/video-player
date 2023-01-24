export default function (context) {
  return {
    VariableDeclarator(node) {
      // tipo de variable const
      if (node.kind === "const") {
        const decalration = node.declarations[0];
        // asegurarnos que el valor es un numero
        if (typeof decalration.init.value === "number") {
          if (decalration.id.name != decalration.id.name.toUpperCase()) {
            context.report({
              node: decalration.id,
              message: "El nombre de la constante debe estar en mayuscula",
              fix: function (fixer) {
                return fixer.replaceText(
                  declaration.id,
                  decalration.id.name.toUpperCase()
                );
              },
            });
          }
        }
      }
    },
  };
}
