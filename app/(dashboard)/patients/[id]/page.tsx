

type PatientsPageProps = {
  params: Promise<{
    id: string;
  }>;
};


export default async function PatientsPage( props : PatientsPageProps) {

    const { id } = await props.params;

  return (
    <div>
      <h2 className="text-2xl font-semibold">Patients</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Is passed is  - {id}
      </p>
    </div>
  );
}
