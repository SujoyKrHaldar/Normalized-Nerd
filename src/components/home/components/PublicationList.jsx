import PublicationCard from "../../designs/cards/PublicationCard";

function PublicationList({ data }) {
  return (
    <>
      <div className="">
        {data.map((d) => (
          <PublicationCard key={d.id} data={d} />
        ))}
      </div>
    </>
  );
}

export default PublicationList;
