import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const LigaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="ativo" source="ativo" />
        <TextInput label="descricao" multiline source="descricao" />
        <TextInput label="nome" source="nome" />
        <TextInput label="sigla" source="sigla" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
