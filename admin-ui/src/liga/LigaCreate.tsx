import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const LigaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="ativo" source="ativo" />
        <TextInput label="descricao" multiline source="descricao" />
        <TextInput label="nome" source="nome" />
        <TextInput label="sigla" source="sigla" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
