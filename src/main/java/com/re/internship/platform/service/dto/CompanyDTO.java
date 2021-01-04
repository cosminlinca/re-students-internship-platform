package com.re.internship.platform.service.dto;

import java.io.Serializable;
import javax.persistence.Lob;

/**
 * A DTO for the {@link com.re.internship.platform.domain.Company} entity.
 */
public class CompanyDTO implements Serializable {
    private Long id;

    private String name;

    private String description;

    private String domainOfActivity;

    private String technologies;

    private String contact;

    private String address;

    private String observations;

    @Lob
    private byte[] presentation;

    private String presentationContentType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDomainOfActivity() {
        return domainOfActivity;
    }

    public void setDomainOfActivity(String domainOfActivity) {
        this.domainOfActivity = domainOfActivity;
    }

    public String getTechnologies() {
        return technologies;
    }

    public void setTechnologies(String technologies) {
        this.technologies = technologies;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getObservations() {
        return observations;
    }

    public void setObservations(String observations) {
        this.observations = observations;
    }

    public byte[] getPresentation() {
        return presentation;
    }

    public void setPresentation(byte[] presentation) {
        this.presentation = presentation;
    }

    public String getPresentationContentType() {
        return presentationContentType;
    }

    public void setPresentationContentType(String presentationContentType) {
        this.presentationContentType = presentationContentType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CompanyDTO)) {
            return false;
        }

        return id != null && id.equals(((CompanyDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CompanyDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", description='" + getDescription() + "'" +
            ", domainOfActivity='" + getDomainOfActivity() + "'" +
            ", technologies='" + getTechnologies() + "'" +
            ", contact='" + getContact() + "'" +
            ", address='" + getAddress() + "'" +
            ", observations='" + getObservations() + "'" +
            ", presentation='" + getPresentation() + "'" +
            "}";
    }
}