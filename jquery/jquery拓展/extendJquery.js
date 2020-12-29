;
        (
            function ($) {
                $.fn.extend({
                    DropDownList: function (options) {
                        var defaults = {
                            valueField: "ID",
                            textField: "Name",
                            data: [],
                            OnSelect: function (text, value) {

                            }
                        }
                        options = $.extend(defaults, options);
                        var html = "<select"+" valueField='"+options.valueField+"' textField='"+options.textField+"'>";
                        $.each(options.data, function (index, item) {
                            html += "<option value='" + item[options.valueField] + "'>" + item[
                                options.textField] + "</option>";
                        });
                        html += "</select>";
                        $(this).append(html);
                        $(this).children("select").eq(0).change(function () {
                            var selected = $(this).children(":selected")[0];
                            options.OnSelect(selected.text, selected.value);
                        });

                        return this;
                    },
                    SetSelect: function (value) {
                        var optionArray = $(this).children("select").eq(0).children("option");
                        for (let i = 0; i < optionArray.length; i++) {
                            if (optionArray[i].value == value) {
                                $(this).children("select").eq(0).prop("selectedIndex", i);
                                break;
                            }
                        }
                    },
                    GetSelectedData: function () {
                        var index = $(this).children("select").eq(0).prop("selectedIndex");
                        var option = $(this).children("select").eq(0).children("option").eq(index);
                        var valueField=$(this).children("select").eq(0).attr("valueField");
                        var textField=$(this).children("select").eq(0).attr("textField");
                        return {
                            [valueField]: option.val(),
                            [textField]: option.text()
                        }
                    }
                });
            }
        )(jQuery);