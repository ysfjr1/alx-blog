import React from "react";
import TextInput from "../../utils/TextInput";
import TextAreaInput from "../../utils/TextAreaInput";
import PrimaryBtn from "../../utils/PrimaryBtn";

const MainDetails = ({ isSubmitting, dirty }) => {
    return (
        <div className="bg-BG_WHITE rounded-md shadow">
            <h5 className="text-base font-bold text-TEXT_THIRD border-b p-5">
                Details
            </h5>

            <div className="p-5">
                {/* TITLE SECTION */}
                <div className="mb-6 items-center">
                    <div>
                        <TextInput
                            name="title"
                            type="text"
                            label="Blog Title"
                        />
                    </div>
                </div>

                {/* DESCRIPTION SECTION */}
                <div className="mb-6 items-center">
                    <div>
                        <TextAreaInput
                            name="description"
                            type="text"
                            label="Blog Content"
                        />
                    </div>
                </div>

                {/* DEPARTMENT SECTION */}
                <div className="mb-6 items-center">
                    <div>
                        <TextInput
                            name="image"
                            type="text"
                            label="Blog Image Link"
                        />
                    </div>
                </div>

                <div className="border-t pt-4 flex items-center justify-end">
                    <PrimaryBtn
                        type="submit"
                        value="Save Blog"
                        isSubmitting={isSubmitting}
                        dirty={dirty}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainDetails;
